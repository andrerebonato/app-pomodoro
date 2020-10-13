import React, { useState } from "react";
import { View, LayoutChangeEvent, ViewStyle } from "react-native";

interface Type {
    children: Function;
    style?: ViewStyle;
}

const OnLayout = ({ children, style, ...props }: Type) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const onLayout = (e: LayoutChangeEvent) => {
        setDimensions(e.nativeEvent.layout);
    };

    let styles = {
        flex: 1,
    };

    return (
        <View {...props} onLayout={onLayout} style={[styles, style]}>
            {children(dimensions)}
        </View>
    );
};

export default OnLayout;
