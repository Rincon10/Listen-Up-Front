import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BasicTabs(props) {
    const { handleChange = () => {}, value = 0 } = props;
    return (
        <Box>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Posts" />
                <Tab label="Comments" />
                <Tab label="About" />
            </Tabs>
        </Box>
    );
}
