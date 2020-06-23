
  Pod::Spec.new do |s|
    s.name = 'CrashlyticsPlugin'
    s.version = '0.0.1'
    s.summary = 'crashlytics plguin'
    s.license = 'MIT'
    s.homepage = 'no'
    s.author = 'yossi b'
    s.source = { :git => 'no', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end