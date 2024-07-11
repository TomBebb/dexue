import {titleCase} from "title-case";

export function snakeToTitle(text: string): string {
    return titleCase(text.replace('-', ' '))
}
