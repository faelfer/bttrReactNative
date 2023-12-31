/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
} from 'react-native';
import { Input, Icon } from '@rneui/themed';

import styles from './styles';
import { SURFACE_COLOR } from '../../styles/colors';

import ButtonChoice from './components/ButtonChoice';
import ButtonChoiceSelected from './components/ButtonChoiceSelected';

export default function ModalPicker({
  choices,
  choiceSelected,
  isVisibleModal,
  titleText,
  placeholderText,
  onAction,
  onClose,
}) {
  const [choiceName, setChoiceName] = useState('');
  const [choicesBySearchValue, setChoicesBySearchValue] = useState(choices);

  useEffect(() => {
    // console.log('useEffect | choices: ', choices);
    setChoicesBySearchValue(choices);
  }, [choices]);

  function onSelectChoice(choiceSelect) {
    setChoiceName('');
    setChoicesBySearchValue(choices);
    onAction(choiceSelect);
  }

  function renderChoices(choiceLoop) {
    return (
      choiceLoop.name === choiceSelected.name ? (
        <ButtonChoiceSelected
          label={choiceLoop.name}
          onAction={() => onSelectChoice(choiceLoop)}
        />
      ) : (
        <ButtonChoice
          label={choiceLoop.name}
          onAction={() => onSelectChoice(choiceLoop)}
        />
      ));
  }

  function itemsByValueSearch(items, itemPropertyName, valueToSearch) {
    function searchListByValue(element) {
      const valueToSearchLowerCase = valueToSearch.toLowerCase();
      const elementValueLowerCase = (element[itemPropertyName]).toLowerCase();
      console.log('searchListByValue | elementValueLowerCase: ', elementValueLowerCase);
      const isIncludedInElementValue = elementValueLowerCase.includes(valueToSearchLowerCase);
      return isIncludedInElementValue;
    }

    const itemsValueSearch = items.filter(searchListByValue);
    console.log('itemsByValueSearch | itemsValueSearch: ', itemsValueSearch);
    return itemsValueSearch;
  }

  async function sendSearchValue(textValue) {
    console.log('sendSearchValue | textValue: ', textValue);
    setChoiceName(textValue);
    const resultChoicesBySearchValue = itemsByValueSearch(choices, 'name', textValue);
    console.log('sendSearchValue | resultChoicesBySearchValue: ', resultChoicesBySearchValue);
    setChoicesBySearchValue(resultChoicesBySearchValue);
  }

  function renderIconSearch() {
    return (
      <Icon
        name="search-circle"
        type="ionicon"
        size={35}
        color={SURFACE_COLOR}
        onPress={() => sendSearchValue(choiceName)}
      />
    );
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isVisibleModal}
    >
      <View style={styles.centeredView}>
        <Text style={styles.textModalPicker}>
          {titleText}
        </Text>
        <Input
          testID="TextInputCpfCnpjID"
          containerStyle={styles.containerInputForm}
          inputContainerStyle={styles.inputContainerForm}
          inputStyle={styles.inputForm}
          placeholderTextColor={SURFACE_COLOR}
          underlineColorAndroid="transparent"
          placeholder={placeholderText}
          returnKeyType="search"
          onSubmitEditing={() => sendSearchValue(choiceName)}
          onChangeText={(text) => setChoiceName(text)}
          value={choiceName}
          rightIcon={renderIconSearch()}
        />
        {choicesBySearchValue.length >= 7
          ? (
            <ScrollView
              style={styles.containerModalPicker}
              contentContainerStyle={styles.contentContainerModalPicker}
            >
              {choicesBySearchValue.map((choice) => renderChoices(choice))}
            </ScrollView>
          )
          : (
            <View style={[styles.contentContainerModalPicker, {
              width: '100%',
              height: '71%',
            }]}
            >
              {choicesBySearchValue.length === 0
                ? (
                  <Text style={styles.textMessageNotFound}>
                    Nenhum item encontrado na sua lista de opções
                  </Text>
                ) : null }

              {choicesBySearchValue.map((choice) => renderChoices(choice))}
            </View>
          )}
        <ButtonChoice
          label="FECHAR"
          onAction={() => onClose()}
        />
      </View>
    </Modal>
  );
}
