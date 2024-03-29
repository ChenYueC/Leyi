var body = $response.body;
var objk = JSON.parse(body);

objk = {
  "request_date_ms" : 1662617472602,
  "request_date" : "2022-09-08T06:11:12Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2021-08-11T18:08:19Z",
    "original_application_version" : "16420",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "VSCOANNUAL" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "trial",
        "expires_date" : "2023-07-15T06:01:28Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2023-07-05T06:03:04Z",
        "original_purchase_date" : "2023-07-05T06:01:29Z",
        "purchase_date" : "2023-07-05T06:01:28Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "membership" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-07-05T06:01:28Z",
        "product_identifier" : "VSCOANNUAL",
        "expires_date" : "2023-07-15T06:01:28Z"
      }
    },
    "original_purchase_date" : "2020-05-20T09:12:36Z",
    "original_app_user_id" : "$RCAnonymousID:46d692d9ad2c4c9194dc29eefd73ca42",
    "last_seen" : "2023-07-05T05:57:44Z"
  }
}


body = JSON.stringify(objk);

$done({body});
