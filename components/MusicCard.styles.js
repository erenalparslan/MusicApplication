import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  image_styles: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginBottom: 10,
  },
  end_view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    marginLeft: 10,
  },
  end_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text_title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text_desc: {
    color: 'black',
    fontWeight: 'heavy',
    fontSize: 12,
  },
  info_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    shadowColor: '#000',
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
});
