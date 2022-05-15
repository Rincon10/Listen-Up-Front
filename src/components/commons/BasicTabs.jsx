import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BasicTabs(props) {
    const { handleChange = () => {}, value = 0 } = props;
    const color = '#e7d4ec';
    return (
        <Box>
            <Tabs value={value} onChange={handleChange}>
                <Tab sx={{ color: { color } }} label="Posts" />
                <Tab sx={{ color: { color } }} label="About" />
            </Tabs>
        </Box>
    );
}
