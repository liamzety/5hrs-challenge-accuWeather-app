import React, { Fragment, useRef, useState } from 'react'
import { weatherService } from '../services/weatherService';
//icons
import { BiSearchAlt2 } from 'react-icons/bi'
export function Search(props) {

  const inputRef = useRef(null);

  async function onCitySearch(query) {
    try {
      const weather = await weatherService.getForecastFromCity(query);
      props.updateForecasts(weather)
    } catch (err) {
      console.log('ERR', err);
    }
  }

  const [autoComplete, setAutoComplete] = useState(null);
  async function getAutoComplete(ev) {
    try {
      const autoComplete = await weatherService.getAutoComplete(
        ev.target.value
      );
      setAutoComplete(autoComplete);
    } catch (err) {
      setAutoComplete(null);
      console.log('ERR', err);
    }
  }
  function onCloseModal() {
    setAutoComplete(null);
  }
  return (
    <section className="search">
      <form
        className="flex align-center justify-center"
        onSubmit={(ev) => {
          ev.preventDefault();
          onCitySearch(inputRef.current.value);
        }}
        action=""
      >
        <div className="relative">
          <input onChange={getAutoComplete} ref={inputRef} type="text" placeholder="Search for a city" />
          <BiSearchAlt2 />
          {autoComplete && autoComplete.length !== 0 && (
            <Fragment>
              <div onClick={onCloseModal} className="modal-screen-wrapper"></div>
              <div className="auto-complete-modal absolute">
                {autoComplete.map((val) => {
                  return (
                    <p onClick={() => {
                      onCitySearch(val.LocalizedName)
                      setAutoComplete(null)
                    }}>
                      {val.Country.LocalizedName} , {val.LocalizedName}
                    </p>
                  );
                })}
              </div>
            </Fragment>
          )}
        </div>
      </form>
    </section>
  )
}
