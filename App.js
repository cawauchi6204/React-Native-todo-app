import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [item, setItem] = useState({ title: '', description: '', done: false })
  const [itemLists, setItemLists] = useState([
    { title: '財布', description: '5000円以上', done: false },
    { title: 'スマホ', description: '', done: false },
  ])

  const todoPress = e => {
    e.preventDefault()
    setItemLists([...itemLists, item])
    setItem({ title: '', description: '', done: false })
  }
  // itemListsのなかに入っているオブジェクトを展開している
  const rows = itemLists.map((itemList, index) => (
    <tr key={index}>
      <td>
        {index + 1}
      </td>
      <td>
        {itemList.title}
      </td>
      <td>
        {itemList.description}
      </td>
      <td>
        {itemList.done ? '○' : '✖︎'}
      </td>
    </tr>
  ))

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>やること</Text>
        <TextInput
          style={styles.formControl}
          value={item.title}
          placeholder="何かやること"
          onChange={e => setItem({...item,title:e.target.value})}
        />
        <TextInput
          style={styles.formControl}
          value={item.description}
          placeholder="詳細"
          onChange={e => setItem({...item,description:e.target.value})}
        />
        <Button
          title="追加する"
          onPress={todoPress}
        />
        <table border='1' cellSpacing='0'>
          <thead>
            <tr>
              <th>Number</th>
              <th>title</th>
              <th>description</th>
              <th>state</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: 'grey',
    borderWidth: 1
  }
});
