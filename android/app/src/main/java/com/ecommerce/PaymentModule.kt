package com.yourapp

import android.app.Application
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import com.initialcode.paymentsdk.PaymentSDK
import com.initialcode.paymentsdk.PaymentSDKResponseCallback

class PaymentModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var paymentSDK: PaymentSDK? = null

    override fun getName(): String {
        return "PaymentModule"
    }

    @ReactMethod
    fun init() {
        val applicationContext = reactApplicationContext.applicationContext
        PaymentSDK.Companion.init(applicationContext)
        paymentSDK = PaymentSDK()
    }

    @ReactMethod
    fun startPayment(cardNo: String, expDate: String, cvv: String, amount: Double, callback: Callback) {
        paymentSDK?.startPayment(cardNo, expDate, cvv, amount, object : PaymentSDKResponseCallback {
            override fun onSuccess() {
                callback.invoke(null)
            }
            override fun onFailure(error: String) {
                callback.invoke(error)
            }
        }) ?: run {
            callback.invoke("PaymentSDK is not initialized")
        }
    }

    @ReactMethod
    fun confirmPayment(otp: String, callback: Callback) {
        paymentSDK?.confirmPayment(otp, object : PaymentSDKResponseCallback {
            override fun onSuccess() {
                callback.invoke(null)
            }
            override fun onFailure(error: String) {
                callback.invoke(error)
            }
        }) ?: run {
            callback.invoke("PaymentSDK is not initialized")
        }
    }
}
