import './styles/selectbox.css';
import { TextField } from "@mui/material"

function SelectBox () {
    return (
        <div className="main-box">
            <TextField className='output-box' label="Decimal" InputProps={{ readOnly: true }} />
            <TextField className='output-box' label="Binary" InputProps={{ readOnly: true }} />
            <TextField className='output-box' label="Hexadecimal" InputProps={{ readOnly: true }} />
            <TextField className='output-box' label="Octal" InputProps={{ readOnly: true }} />

        </div>
    )
}

export default SelectBox;