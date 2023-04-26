/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { classNameFactory } from "@api/Styles";
import { debounce } from "@utils/debounce";
import { React, TextInput } from "@webpack/common";

import { Header } from "./header";
import { IconContainer } from "./iconContainer";
import { SearchIcon } from "./searchIcon";

const cl = classNameFactory("vc-more-stickers-");

export interface PickerHeaderProps {
    onQueryChange: (query: string) => void;
}

const debounceQueryChange = debounce((cb, value) => cb(value), 150);

export const PickerHeader = ({ onQueryChange }: PickerHeaderProps) => {
    const [query, setQuery] = React.useState<string | undefined>();

    return (
        <Header>
            <div className={cl("picker-container")}>
                <div>
                    <div className={cl("picker-search-box")}>
                        <TextInput
                            style={{ height: "30px" }}

                            placeholder="Search stickers"
                            autoFocus={true}
                            value={query}

                            onChange={(value: string) => {
                                setQuery(value);
                                debounceQueryChange(onQueryChange, value);
                            }}
                        />
                    </div>
                    <div className={cl("picker-search-icon")}>
                        <IconContainer>
                            <SearchIcon />
                        </IconContainer>
                    </div>
                </div>
            </div>
        </Header>
    );
};
