import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = props => {
  return (
    // <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
       colors={['#20c5a9' ,'#19364A']}
       start={{x: 1, y: 0}} end={{x: 1, y: 1}}>
        <Text {...props} style={[props.style, {fontSize:16,fontWeight:'bold'}]} />
      </LinearGradient>
    // </MaskedView>
  );
};

export default GradientText;