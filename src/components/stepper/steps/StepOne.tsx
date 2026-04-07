import { Box } from "@mui/material"
import MyFormControl from "../../../UI/MyFormControl"
import { useFormStore } from "../../../store/useFormStore"
import { chunks1, chunks2 } from "./data/step-one"

const StepOne: React.FC = () => {
    const store = useFormStore()

    const handleChange = (values: string[], name: string) => {
        store.setAnswer(name, values)
    }

    return (
        <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <MyFormControl
            gridSize={{xs:6,sm:4,lg:4}}
                label='What is your vibe?'
                name='vibe'
                values={store.answers.vibe || []}
                chunks={chunks1}
                onChange={(values) => handleChange(values, 'vibe')}
            />
            <MyFormControl
            gridSize={{xs:6,sm:4,lg:3}}
                label='Situation for listening?'
                name='goals'
                values={store.answers.goals || []}
                chunks={chunks2}
                onChange={(values) => handleChange(values, 'goals')}
            />
        </Box>
    )
}

export default StepOne