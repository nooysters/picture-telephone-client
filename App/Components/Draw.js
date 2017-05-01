import React from 'react';
import {
  ART,
  View,
  Text
} from 'react-native';

const {
  Surface,
  Group,
  Shape,
} = ART;


export default function Draw(d, width, height) {
  return (
    <View>

      <Surface width={500} height={500}>
        <Group x={0} y={0}>
          <Shape
            d={d}
            stroke="#000"
            strokeWidth={1} />
        </Group>
      </Surface>
    </View>
  )
}