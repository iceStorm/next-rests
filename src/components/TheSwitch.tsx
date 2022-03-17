import { Switch } from "@headlessui/react"
import { memo, useState } from "react"

export type TheSwitchPropsType = {
    title: string
    checked: boolean
    onChange: (value: boolean) => void
}

/**
 * App switch component.
 * @param props 
 * @returns 
 */
function TheSwitch(props: TheSwitchPropsType) {
    // console.log('render switch...');
    
    return (
        <Switch.Group>
            <div className="flex items-center gap-2">
                <Switch
                    checked={props.checked}
                    onChange={(value) => props.onChange(value)}
                    className={`${
                        props.checked
                            ? "bg-primary"
                            : "bg-gray-300 dark:bg-gray-400"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-primary`}
                >
                    <span
                        className={`${
                            props.checked ? "translate-x-6" : "translate-x-1"
                        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                </Switch>

                <Switch.Label className="mr-4 select-none cursor-pointer">
                    {props.title}
                </Switch.Label>
            </div>
        </Switch.Group>
    )
}

export default memo(TheSwitch)
