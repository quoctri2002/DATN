import { Linking, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/themed';
import axios from 'axios';
import moment from 'moment';
import crypto from 'crypto-js';

const ZaloPay = () => {
  const [totalAfterShipping, setTotalAfterShipping] = useState(0);
  const [checkOrder, setCheckOrder] = useState();

  const config = {
    app_id: '2553',
    key1: 'PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL',
    key2: 'kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz',
    endpoint: 'https://sb-openapi.zalopay.vn/v2/create',
    endpoint2: 'https://sb-openapi.zalopay.vn/v2/query',
  };

  const embed_data = {};
  const items = [{}];
  const transID = Math.floor(Math.random() * 1000000);

  // tao don hang
  const checkOutZaloPay = async () => {
    try {
      const order = {
        app_id: config.app_id,
        app_trans_id: `${moment().format('YYMMDD')}_${transID}`,
        app_user: 'Thewonder',
        app_time: Date.now(),
        item: JSON.stringify(items),
        embed_data: JSON.stringify(embed_data),
        amount: totalAfterShipping.toString(),
        description: `Zalopay - Thanh toán đơn hàng #${transID}`,
        bank_code: 'zalopayapp',
        mac: '',
      };
      const data =
        config.app_id +
        '|' +
        order.app_trans_id +
        '|' +
        order.app_user +
        '|' +
        order.amount +
        '|' +
        order.app_time +
        '|' +
        order.embed_data +
        '|' +
        order.item;
      order.mac = crypto.HmacSHA256(data, config.key1).toString();
      const postData = {
        app_id: order.app_id,
        app_trans_id: order.app_trans_id,
        mac: '',
      };
      const data2 = postData.app_id + '|' + postData.app_trans_id + '|' + config.key1;
      postData.mac = crypto.HmacSHA256(data2, config.key1).toString();
      const res = await axios.post(config.endpoint, null, { params: order });
      console.log(res.data);
      const linkk = res.data.order_url;
      Linking.openURL(linkk);
      setCheckOrder(postData);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(checkOrder);
  return (
    <View>
      <Text>ZaloPay</Text>
      <Button title="Pay" onPress={checkOutZaloPay} />
    </View>
  );
};

export default ZaloPay;
