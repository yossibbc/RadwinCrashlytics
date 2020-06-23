package com.crashlytics.plugin;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.google.firebase.crashlytics.FirebaseCrashlytics;


@NativePlugin()
public class CrashlyticsPlugin extends Plugin {

    private static final String PLUGIN_TAG = "CrashlyticsPlugin";
   
    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void setUserId(PluginCall call) {
        String value = call.getString("userId");
        FirebaseCrashlytics.getInstance().setUserId(value);
        call.success();
    }

    @PluginMethod()
    public void log(PluginCall call) {
        String value = call.getString("log");
        FirebaseCrashlytics.getInstance().log(value);
        call.success();
    }

    @PluginMethod()
    public void recordException(PluginCall call) {
        String value = call.getString("exception");
        FirebaseCrashlytics.getInstance().recordException(value);
        call.success();
    }

    @PluginMethod()
    public void forceCrash() {
        // Force a crash
        throw new RuntimeException("Test Crash"); 
    }
}
