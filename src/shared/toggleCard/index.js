import React from 'react';
import CloseIcon from "../../assets/icons/CloseIcon";
import PropTypes from 'prop-types';
import {
    ToggleWrapper,
    ToggleContainer,
    TttleContainer
} from "./styles";

const UserDetailToggle = (props) => {
    const {
        isOpen,
        onToggle,
        sortListOptions,
        selectedItem,
        onChange
    } = props;

    return (
        <ToggleWrapper>
            <div className={`toggle-menu${isOpen === true ? ' open' : ''}`}>
                <ToggleContainer>
                <span onClick={onToggle} className="p-2"><CloseIcon /></span>
                <TttleContainer>
                    مرتب سازی بر اساس
                </TttleContainer>
                    <div>
                        {
                            sortListOptions.map((item, index) => (
                                <div className="form-check d-flex" key={index}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id={`flexCheckDefault-${index}`}
                                        value={item['value']}
                                        onChange={() => { onChange(item.value) }}
                                        checked={selectedItem.includes(item['value'])}
                                        name="sort"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault" >
                                        {item['label']}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </ToggleContainer>
            </div>
        </ToggleWrapper>
    )
}

UserDetailToggle.propTypes = {
    isOpen:PropTypes.bool,
    onToggle:PropTypes.func,
    sortListOptions:PropTypes.array,
    selectedItem:PropTypes.array,
    onChange:PropTypes.func
  };
export default UserDetailToggle;