import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import headerOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/LMThomaz.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Leonardo Thomaz</Text>
          <Text style={styles.subject}>Dev Café</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Estusiasta nos melhores café!
         {'\n'}{'\n'}
        Buscando sempre deixar a vida das pessoas com um plus na cafeina!
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={headerOutlineIcon} />
          </RectButton>


          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );

}

export default TeacherItem;