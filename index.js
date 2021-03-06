'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TouchableOpacity,
  View,
} = ReactNative;

var Button = require('./button.js');
var Overlay = require('./overlay.js');
var Sheet = require('./sheet.js');

module.exports =  React.createClass({
  getDefaultProps: function() {
    return {
      cancelText: 'Cancel',
    };
  },
  render() {
    return (
      <Overlay visible={this.props.visible}>
        <View style={styles.actionSheetContainer}>
          <TouchableOpacity
            style={{flex:1}}
            onPress={this.props.onCancel}>
          </TouchableOpacity>
          <Sheet visible={this.props.visible}>
            <View style={styles.buttonContainer}>
              {this.props.children}
            </View>
            <Button
              buttonStyle={{
                marginTop:6, borderRadius:6,
                backgroundColor: 'rgba(33,33,33,0.9)',
                height: 57,
              }}
              textStyle={{
                color: '#F9BF3B',
                fontFamily: 'OpenSans', fontSize: 20,
                ...this.props.textStyle
              }}
              onPress={this.props.onCancel}>{this.props.cancelText}</Button>
          </Sheet>
        </View>
      </Overlay>
    );
  },
});
module.exports.Button = Button;

var styles = StyleSheet.create({
  actionSheetContainer: {
    flex: 1,
    padding: 10,
    paddingBottom: 6,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonContainer: {
    borderRadius:6,
    overflow: 'hidden',
  }
});
