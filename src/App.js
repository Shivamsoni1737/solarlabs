import { Checkbox, Paper, TextField, Typography, InputLabel, Select, MenuItem, FormControl, Button } from '@mui/material';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [check2021, setCheck2021] = useState(false);
  const [check2022, setCheck2022] = useState(false);
  const [check2023, setCheck2023] = useState(false);
  const [select2021, setselect2021] = useState('');
  const [select2022, setselect2022] = useState('');
  const [select2023, setselect2023] = useState('');
  const [disable, setdisable] = useState(-1);
  const [value2021, setvalue2021] = useState([0, 0, 0, 0]);
  const [active2021, setactive2021] = useState(-1);
  const [activeValue2021, setactiveValue2021] = useState(0);

  useEffect(() => {
    if (value2021[0] != 0 && value2021[1] != 0 && value2021[2] != 0 && value2021[3] != 0) {
      setdisable(-1);
    }
  }, [])

  const handle2021Change = (e) => {
    setCheck2021(e.target.checked);
  }

  const handle2022Change = (e) => {
    setCheck2022(e.target.checked);
  }

  const handle2023Change = (e) => {
    setCheck2023(e.target.checked);
  }

  const handle2021Select = (e) => {
    setselect2021(e.target.value.split(","));
  }

  const handle2022Select = (e) => {
    setselect2022(e.target.value.split(","));
  }

  const handle2023Select = (e) => {
    setselect2023(e.target.value.split(","));
  }

  const handleFieldChange2021 = (e, i) => {
    if (e.target.value != 0) {
      setdisable(i);
    }
    if (e.target.value == 0) {
      setdisable(-1);
    }
    setactive2021(i);
    setactiveValue2021(Number(e.target.value));
    let value = value2021;
    value[i] = e.target.value;
    setvalue2021(value);
    if (value2021[0] != 0 && value2021[1] != 0 && value2021[2] != 0 && value2021[3] != 0) {
      setdisable(-1);
    }
  }

  const handleFieldChange2022 = (e) => {

  }

  const handleFieldChange2023 = (e) => {

  }

  const handleChange2021 = () => {
    for (var i = 0; i < 4; i++) {
      if (i != active2021) {
        let value = value2021;
        value[i] = Math.floor(Math.random() * (200) + activeValue2021 - 100);
        setvalue2021(value);
      }
    }
  }

  console.log(value2021);

  return (
    <div>
      <Paper elevation={1} sx={{ width: 'max-content', m: "auto", justifyContent: "center", mt: 2, p: 2 }}>
        <Typography variant="h4">Select the Year</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox onChange={(e) => { handle2021Change(e) }} />
          <Typography variant="">2021</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox onChange={(e) => { handle2022Change(e) }} />
          <Typography variant="">2022</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox onChange={(e) => { handle2023Change(e) }} />
          <Typography variant="">2023</Typography>
        </div>
      </Paper>
      {check2021 && <Paper elevation={1} sx={{ display: 'flex', flexDirection: "column", width: 'max-content', m: "auto", justifyContent: "center", mt: 2, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>2021 Year Card</Typography>
        <FormControl sx={{ width: "270px" }}>
          <InputLabel id="2021-select-label">Select option</InputLabel>
          <Select fullWidth
            sx={{ mb: 1 }}
            labelId="2021-select-label"
            id="2021-select"
            defaultValue={''}
            label="Select option"
            onChange={(e) => { handle2021Select(e) }}
          >
            <MenuItem value={"Jan,Feb,Mar,Apr"}>Jan - Apr</MenuItem>
            <MenuItem value={"May,Jun,Jul,Aug"}>May - Aug</MenuItem>
            <MenuItem value={"Sep,Oct,Nov,Dec"}>Sep - Dec</MenuItem>
          </Select>
          {select2021 && select2021.map((option, i) => {
            return (
              <div key={option} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body1">{option}</Typography>
                <TextField type="number" value={value2021[i]} disabled={disable != -1 && disable != i} onChange={(e) => handleFieldChange2021(e, i)} key={option} placeholder={option} sx={{ mb: 1, ml: 1 }} />
              </div>
            )
          })}
        </FormControl>
        <Button onClick={handleChange2021} sx={{ width: "120px", ml: "auto", backgroundColor: "#ddd" }}>Calculate</Button>
      </Paper>}
      {check2022 && <Paper elevation={1} sx={{ width: 'max-content', m: "auto", justifyContent: "center", mt: 2, p: 2 }}>
        <Typography variant="h4">2022 Year Card</Typography>
        <FormControl fullWidth>
          <InputLabel id="2022-select-label">Select option</InputLabel>
          <Select fullWidth
            sx={{ mb: 1 }}
            labelId="2022-select-label"
            id="2022-select"
            value={select2022}
            label="Select option"
            onChange={(e) => { handle2022Select(e) }}
          >
            <MenuItem value={"Jan,Feb,Mar,Apr"}>Jan - Apr</MenuItem>
            <MenuItem value={"May,Jun,Jul,Aug"}>May - Aug</MenuItem>
            <MenuItem value={"Sep,Oct,Nov,Dec"}>Sep - Dec</MenuItem>
          </Select>
          {select2022 && select2022.map((option) => {
            return (
              <div key={option} style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">{option}</Typography>
                <TextField type="number" onChange={(e) => handleFieldChange2022(e)} defaultValue={0} key={option} placeholder={option} sx={{ mb: 1, ml: 1 }} />
              </div>
            )
          })}
        </FormControl>
      </Paper>}
      {check2023 && <Paper elevation={1} sx={{ width: 'max-content', m: "auto", justifyContent: "center", mt: 2, p: 2 }}>
        <Typography variant="h4">2023 Year Card</Typography>
        <FormControl fullWidth>
          <InputLabel id="2023-select-label">Select option</InputLabel>
          <Select fullWidth
            sx={{ mb: 1 }}
            labelId="2023-select-label"
            id="2023-select"
            value={select2023}
            label="Select option"
            onChange={(e) => { handle2023Select(e) }}
          >
            <MenuItem value={"Jan,Feb,Mar,Apr"}>Jan - Apr</MenuItem>
            <MenuItem value={"May,Jun,Jul,Aug"}>May - Aug</MenuItem>
            <MenuItem value={"Sep,Oct,Nov,Dec"}>Sep - Dec</MenuItem>
          </Select>
          {select2023 && select2023.map((option) => {
            return (
              <div key={option} style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">{option}</Typography>
                <TextField type="number" onChange={(e) => handleFieldChange2023(e)} defaultValue={0} key={option} placeholder={option} sx={{ mb: 1, ml: 1 }} />
              </div>
            )
          })}
        </FormControl>
      </Paper>}
    </div>
  )
}

export default App;
