import Icon from "../../assets/images/svg/Icon";


export default function Checkbox({className,onChange}){
    return(
        <label className="container">
            <input type="checkbox"  onChange={onChange}/>
            <Icon/>
        </label>
    )
}