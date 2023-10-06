"use client";

import { useState, useEffect, useReducer, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RiArrowDownSFill } from "react-icons/ri";
import qs from "query-string";

type FilterItemProps = {
  title: string;
  color?: boolean;
  isLoading?: boolean;
  setIsLoading?: (x: boolean) => void;
  sideFilterCloseHandler?: (x: boolean) => void;
  options: {
    name: string;
    slug: string;
    hexColor?: string;
  }[];
};

/**
 * 1. get the value from checkbox --> done
 * 2. add it to the state --> done
 * 3. get the params form the url --> done
 * 4. update the params --> done
 * 5. update the url --> done
 */

const FilterItem = ({
  title,
  options,
  color,
  isLoading,
  setIsLoading,
  sideFilterCloseHandler
}: FilterItemProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathName = usePathname();
  const category = params?.get(title)?.split(",") || null;

  const [checkedList, setCheckedList] = useState(category || []); // ['xiaomi', 'apple']
  // console.log(checkedList);

  const [showFilter, setShowFilter] = useState(true);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, checked} = event.target;

    if (checked) {
      setCheckedList([...checkedList, value]);
    } else {
      setCheckedList(checkedList.filter((item) => item !== value));
    }

    // Get the current query from the url
    let currentQuery = {} as any;

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    //  prepare the value of the query to added to the url
    const newString = ()=>{
      let text = null;
      if(currentQuery[title]) { // if the query already exists
        let textArr = currentQuery[title].split(",")
        if(currentQuery[title].split(",").includes(value)) { // if the query already contains the value
          text = textArr.filter((item: string)=>item!==value).join(",")
        }else { // if the query does not contain the value
          text = textArr.concat(value).join(",")
        }
      }else { // if the query does not exist
        text = value;
      }
      return text || null;
    }

    const updatedQuery = {
      ...currentQuery,
      // TODO: add the state of the checkbox to the query
      [title]: newString()
    };

    changeUrlParams(updatedQuery);
    
    if(sideFilterCloseHandler) {
      sideFilterCloseHandler(false)
    }
  }

  const changeUrlParams = (updatedQuery: any) => {
    const url = qs.stringifyUrl(
      {
        url: pathName,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };


  return (
    <div>
      <div
        className="flex flex-center cursor-pointer"
        onClick={toggleShowFilter}
      >
        <p className="text-[var(--textColor)] font-semibold flex-1 capitalize">
          {title}
        </p>
        <RiArrowDownSFill
          size={22}
          className={`text-[var(--textColor)] ${
            showFilter ? "rotate-180" : "rotate-0"
          } transition`}
        />
      </div>
      {showFilter && (
        <div className="mt-3 flex flex-col gap-2">
          {options.map((option, index) => (
            <div className="flex items-center gap-2" key={index}>
              <input
                id={option.slug}
                type="checkbox"
                value={option.slug}
                onChange={handleCheckboxChange}
                checked={checkedList.includes(option.slug)}
              />

              {color && (
                <div
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: option.hexColor }}
                ></div>
              )}
              <label htmlFor={option.slug} className="text-[var(--textColor)]">
                {option.name}
              </label>

            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default FilterItem;
