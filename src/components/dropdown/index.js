import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

export default NetworkDropdown = ({ options }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown}>
        <Text>{selectedOption || 'Mumbai Testnet'}</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleDropdown}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={toggleDropdown}
        >
          <View style={styles.modal}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleOptionSelect(option)}
                style={styles.option}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
