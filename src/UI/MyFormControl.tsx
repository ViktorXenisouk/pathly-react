import React, { useState } from "react"
import { Box,Grid, FormLabel } from "@mui/material"
import CheckboxWithLabel from "./CheckboxWithLabel";
import MyLabel from "../components/MyLabel";

type Props = {
    label: string
    values: string[]
    name: string,
    onChange: (values: string[], name: string) => void
    chunks: {
        isSelected?: boolean;
        icon?: React.ReactNode;
        label: string;
        value: string;
        onClick?: () => void;
        color?: string;
    }[],
    gridSize?: any
}

const MyFormControl: React.FC<Props> = ({
    label, values, name, onChange, chunks, gridSize = 6
}) => {
    const [tags, setTags] = useState(values || [])

    console.log('tags', tags)

    const addOrRemoveTag = (tag: string) => {
        setTags((prev) => {
            const isThere = prev?.includes(tag)

            console.log(isThere)

            const newValues = [
                ...(isThere
                    ? prev.filter((v) => v !== tag)
                    : [...prev, tag])
            ]

            onChange(newValues, name)

            return newValues
        });
    }

    return (
        <Box sx={{maxWidth:'1200px', display: "flex", flexDirection: "column", gap: 2, mt: 4}}>
            <FormLabel>{label}</FormLabel>
            <Grid container direction="row" spacing={3}>
                {chunks.map((chunk) =>
                    <Grid size={gridSize} key={chunk.value}>
                        <CheckboxWithLabel
                            label={chunk.icon ? <MyLabel icon={chunk.icon} title={chunk.label} /> : chunk.label}
                            value={chunk.value}
                            onClick={() => addOrRemoveTag(chunk.value)}
                            isSelected={tags?.includes(chunk.value)}
                        />
                    </Grid>)}
            </Grid>
        </Box>
    )
}

export default MyFormControl