import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

interface HeaderButtonProps extends TouchableOpacityProps {

}

export const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
    const { disabled } = props;
    return (<TouchableOpacity disabled {...props} style={{
        paddingVertical: 8,
        backgroundColor: disabled ? COLORS.lightGrayShade : COLORS.primaryShade,
        paddingHorizontal: 12,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',

    }}>
        <Text style={{ color: disabled ? 'grey' : COLORS.primary, fontSize: 16, fontWeight: 'bold' }}>Save</Text>
    </TouchableOpacity>);
}