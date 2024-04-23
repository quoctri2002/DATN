//Cần bắt sự kiện OnNewIntent vì ZaloPay App sẽ gọi deeplink về app của Merchant
@Override
public void onNewIntent(Intent intent) {
  super.onNewIntent(intent);
  ZaloPaySDK.getInstance().onResult(intent);
}

//Reinit ZPDK nếu muốn thanh toán bằng một AppID khác
ZaloPaySDK.tearDown();
ZaloPaySDK.init(<2554>, ZaloPaySDK.ENVIRONMENT_SANDBOX);

//Gọi hàm thanh toán
ZaloPaySDK.getInstance().payOrder(
  <Activity>, <Token>, <YourAppUriScheme>, new MyZaloPayListener()
);

//Implement interface PayOrderListener để nhận kết quả thanh toán 
private static class MyZaloPayListener implements PayOrderListener {
  @Override
  public void onPaymentSucceeded(final String transactionId, final String transToken, final String appTransID) {
    //Handle Success
  }

  @Override
  public void onPaymentCanceled(String zpTransToken, String appTransID) {
    //Handle User Canceled
  }
  @Override
  public void onPaymentError(ZaloPayError zaloPayError, String zpTransToken, String appTransID) {
    //Redirect to Zalo/ZaloPay Store when zaloPayError == ZaloPayError.PAYMENT_APP_NOT_FOUND
    //Handle Error
  }
}