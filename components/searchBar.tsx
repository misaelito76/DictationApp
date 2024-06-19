import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface SearchBarProps {
    onChangeText: (text: string) => void;
    value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeText, value }) => {
    return (
        <TextInput
            style={{ width:280,height: 30, borderColor: 'gray',
                 borderWidth: 0.3, paddingHorizontal: 10,
                borderRadius:12 }}
            placeholder="Search..."
            onChangeText={onChangeText}
            value={value}
        />
    );
};

export default SearchBar;
