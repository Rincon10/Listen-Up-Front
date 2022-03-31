import Button from '@mui/material/Button';
export default function OutlinedButton(props) {
    const { label = 'click' } = props;
    return (
        <Button
            style={{
                borderRadius: '50px',
                padding: '6px',
                borderColor: 'white',
                color:"white"
            }}
            variant="outlined"
        >
            {label}
        </Button>
    );
}
