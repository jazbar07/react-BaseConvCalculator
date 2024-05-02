import './styles/selectbox.css';
import { TextField } from "@mui/material"

function SelectBox ({results}) {

    return (
        <div className="main-box">
            <TextField className='output-box' label="Decimal" defaultValue="undef"
                InputProps={{ readOnly: true }} value={ results[0] }/>
            <TextField className='output-box' label="Binary" defaultValue="undef" 
                InputProps={{ readOnly: true }} value={ results[1] }/>
            <TextField className='output-box' label="Hexadecimal" defaultValue="undef"
                InputProps={{ readOnly: true }} value={ results[2] }/>
            <TextField className='output-box' label="Octal" defaultValue="undef"
                InputProps={{ readOnly: true }} value={ results[3] }/>

        </div>
    )
}

export default SelectBox;