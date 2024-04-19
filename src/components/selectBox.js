import Select from 'react-select'

const options = ([
    { value: 'decimal', label: 'Decimal' },
    { value: 'binary', label: 'Binary' },
    { value: 'hexadecimal', label: 'Hexadecimal' },
    { value: 'octal', label: 'Octal' }
  ]);

  
const selectBox = () => {
    return (
        <Select options={ option }
        />
    )
}

export default selectBox;