import React from 'react';
import { Button, Linking, Alert } from 'react-native';

const ZaloPayIntegration = () => {
  const handlePaymentButtonPress = () => {
    const orderId = '5'; // Đơn hàng số 5
    const amount = 100000; // Tổng tiền 100,000 VND

    // Tạo URL để mở ứng dụng Zalo Pay và chuyển đến màn hình thanh toán đơn hàng
    const zaloPayURL = `zalopay://app/home?action=payonline&appid=1&apptransid=${orderId}&apppackage=com.yourapp.package&amount=${amount}&item=Product&description=Product description`;

    // Kiểm tra xem ứng dụng Zalo Pay có sẵn trên thiết bị hay không
    Linking.canOpenURL(zaloPayURL)
      .then((supported) => {
        if (supported) {
          // Mở ứng dụng Zalo Pay từ ứng dụng của bạn để thanh toán
          Linking.openURL(zaloPayURL);
        } else {
          // Hiển thị thông báo nếu không thể mở ứng dụng Zalo Pay
          Alert.alert('Lỗi', 'Vui lòng cài đặt ứng dụng Zalo Pay trước khi tiếp tục thanh toán.');
        }
      })
      .catch((error) => {
        console.error('Lỗi xác định khả năng mở URL:', error);
      });
  };

  return (
    <Button
      title="Thanh toán đơn hàng số 5 (100,000 VND)"
      onPress={handlePaymentButtonPress}
    />
  );
};

export default ZaloPayIntegration;
