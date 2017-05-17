/**
 * 领取优惠券
 * */
function sign(url, itemId, userId) {
    /**
     * 获取活动的卡券
     * @URL
     * @param itemid 卡券id
     * @param userid 用户id
     * @return
     */
    var res = {
        itemid: itemId,
        userid: userId
    };
    //获取优惠券token
    $.post(url, res, function(data){
        var result = data;
        if(result.status === 1){
            var outBizNo = Math.round(new Date().getTime() / 1000);
            AlipayJSBridge.call('openRpc', {
                operationType: 'alipay.mobilepromo.offlinetaobao.item.purchase',
                requestData: [{
                    "buyerId": res.userid, //默认为userid
                    "itemPutchases": [{
                        "itemId": res.itemid,
                        "purchaseNum": 1
                    }],
                    "outBizNo": outBizNo,
                    "purchaseType": "ITEM",
                    "channel": "qingmangshuju",
                    "token": result.data.token  //获取到token信息
                }],
                headers: {}
            },function (data) {
                if(data.success){
                    // 领取优惠券成功
                } else {
                    // 领取优惠券失败
                    alert(JSON.stringify(data));
                }
            });
        } else {
            console.log(result.data);
        }
    });
}

/**
 * 调起支付宝支付
 * @param data 支付宝支付token
 */
function alipay(data) {
    var that = this;
    document.addEventListener('AlipayJSBridgeReady', function () {
        AlipayJSBridge.call("tradePay", {
            tradeNO: data
        }, function (res) {
            if (res.resultCode) {
                if (res.resultCode === 9000) {
                    // 支付失败
                } else if (res.resultCode === 6001) {
                    alert('支付失败');
                } else {
                    alert(res.resultCode);
                }
            } else {
                alert(res);
            }
        });
    }, false);
}