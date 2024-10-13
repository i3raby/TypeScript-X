// Enum to define different button colors. It includes Red, Green, Black, and Link.
// The Link color is explicitly set to 10, while the others will have their values inferred starting from 0.
export enum ButtonColor {
    Red,
    Green,
    Black,
    Link = 10
}

// Base interface that all button types will extend from.
// This interface defines common properties for buttons.
export interface BaseAPIButton {
    label?: string;    // Optional label for the button
    disabled?: boolean; // Optional boolean to indicate if the button is disabled
}

// Button interface for general-purpose buttons.
// This interface extends the BaseAPIButton and adds more specific properties for standard buttons.
export interface Button extends BaseAPIButton {
    // The color property here can be any ButtonColor, except Link and Red.
    // Exclude utility is used to ensure that 'Link' and 'Red' colors are not allowed.
    color: Exclude<ButtonColor, ButtonColor.Link | ButtonColor.Red>;

    // Unique identifier for the button.
    id: string;
}

// Interface for a link-style button.
// This button uses the Link color and has a 'to' property that represents the URL or link.
export interface LinkButton extends BaseAPIButton {
    color: ButtonColor.Link;  // The color must be 'Link' (explicitly set to 10 in the enum)
    to: string;               // URL or link to navigate to when the button is clicked
}

// Interface for a red button, typically used for dangerous actions like banning a user.
// It uses the Red color and includes a 'ban' property for identifying the user to be banned.
export interface RedButton extends BaseAPIButton { 
    color: ButtonColor.Red;  // The color must be 'Red'
    ban: string;             // Represents the target for banning actions
}

// Union type that allows any button to be of type Button, LinkButton, or RedButton.
// This provides flexibility to handle all button types in the createButton function.
type Buttons = Button | LinkButton | RedButton;

// Function to create a button.
// It accepts any object that matches the 'Buttons' union type.
// This function ensures that the correct button type is created based on the options provided.
function createButton(options: Buttons) {
    // Implementation of button creation logic can be added here.
}

// Example: Creating a LinkButton.
// The 'color' property is set to ButtonColor.Link, and the 'to' property specifies a URL.
createButton({
    color: ButtonColor.Link,
    to: ''
});

// Example: Creating a standard Button.
// The 'color' is set to ButtonColor.Green, and the button has an 'id' to identify it.
createButton({
    color: ButtonColor.Green,
    id: ''
});

// Example: Creating another standard Button with the color 'Black'.
// This button also has a unique 'id'.
createButton({
    color: ButtonColor.Black,
    id: ''
});

// Example: Creating a RedButton, typically used for actions like banning.
// The 'ban' property identifies the user to be banned.
createButton({
    color: ButtonColor.Red,
    ban: ''
});
