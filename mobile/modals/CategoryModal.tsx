import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CategoryTile from '../components/CategoryTile';
import Container from '../components/Container';
import { HeaderButton } from '../components/HeaderButton';
import { CATEGORY } from '../constants';
import { CategoryType } from '../provider/ExpenseIncomeProvider';
import { ScreenProps } from '../screens/ScreenParamList';
import { utilStyle } from '../styles';

interface CategoryModalProps {

}


const CategoryModal: React.FC<ScreenProps<"Category">> = ({ navigation }) => {
    const [selected, setSelected] = useState<CategoryType | null>(null)


    const renderCategories = () => {
        return CATEGORY.map(item => {
            return (<CategoryTile key={item.id} category={item} selected={item.id === selected?.id} setSelected={setSelected} />)
        })
    }

    return (
        <Container>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', ...utilStyle.mb1 }}>
                <Text style={{ ...utilStyle.h1 }}>Select Category</Text>
                <HeaderButton disabled={!Boolean(selected)} onPress={() => navigation.goBack()} />
            </View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {renderCategories()}
            </View>


        </Container>);
}

export default CategoryModal