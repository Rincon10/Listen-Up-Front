export default function ProfileAvatar(props) {
    const { src, style = { width: '100px', heigth: '100px' } } = props;
    return <img style={style} src={src} alt="avatar" />;
}
