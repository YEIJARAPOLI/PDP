import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useContext } from "react"
import { ArticlesContext } from "../context/ArticlesProvider"

const CATEGORIES = [
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "general", label: "General" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sport", label: "Sport" },
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" }
]

const FormCategory = () => {
    const { category, changeCategory } = useContext(ArticlesContext)

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Catrgory"
                    onChange={changeCategory}
                >
                    {CATEGORIES.map((category) => (
                        <MenuItem key={category.value} value={category.value}>
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default FormCategory