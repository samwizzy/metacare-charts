import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { HiOutlineChevronDown } from "react-icons/hi";

type SelectProps = {
  children: React.ReactNode;
  size?: "small" | "medium";
  className?: string;
  sx?: any;
};

export default function MuiSelect(props: SelectProps) {
  const { children, size = "small", className } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160 }} className={className}>
      <FormControl fullWidth size={size}>
        <InputLabel id="demo-simple-select-label">Filter options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Filter options"
          IconComponent={() => (
            <HiOutlineChevronDown size={22} className="mr-3" />
          )}
          onChange={handleChange}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
}
