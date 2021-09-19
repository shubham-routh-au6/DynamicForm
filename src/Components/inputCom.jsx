const InputComponent = ({asset, handleChange}) => {
    return (
        <div id="inputContainer">

            <label>{asset.uid} </label>

            {asset.type === 'radio' && (
                <div className="radioBtnCon">
                    {asset.value.map(val => {
                        return (
                            <div key={val}>
                                <input
                                    type={asset.type}
                                    placeholder={asset.placeholder}
                                    value={val}
                                    name={asset.uid}
                                    onChange={handleChange}
                                />
                                <label>{val}</label>
                            </div>
                        )
                    })}
                </div>)}

            {(asset.type === 'text' || asset.type === 'number' || asset.type === 'email') &&
                <input
                    type={asset.type}
                    placeholder={asset.placeholder}
                    name={asset.name}
                    onChange={handleChange}
                />
            }

            {asset.type === 'address' && (
                <div className="addressCon">
                    {
                        asset.value.map(val => {
                            return (
                                <input key={val}
                                    type={asset.type}
                                    placeholder={val}
                                    name={val}
                                    onChange={handleChange}
                                />
                            )
                        })
                    }
                </div>)
            }

            {asset.type === 'select' && (
                <select onChange={handleChange} name={asset.name}>
                {asset.options.map(val => {
                    return (
                        <option
                            key={val.value}
                            value={val.value}
                        >
                            {val.label}
                        </option>
                    )
                })}
            </select>
            )
            }
        </div>
    )
}

export default InputComponent;