import './MyLabel.css'

interface Props {
    /* 
    * Text to display
    */
    label: string;
    /* 
    * Label Size
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /*
    * Capitalize all letters
    */
    allCaps?: boolean;
    /* 
    * Font color
    */
    fontColor?: string;
    /* 
    * Background color
    */
    backgroundColor?: 'text-primary' | 'text-secondary' | 'text-tertiary';
}

export const MyLabel = ( { label, size = 'normal', fontColor, backgroundColor = 'text-primary', allCaps}: Props ) => {

    return(
        <span 
            className={`${ size } ${ backgroundColor } label`}
            style={{ color: fontColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}