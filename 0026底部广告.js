var version="��˶E��-�ű����� v5.0 ��|��ַ��http://www.1250960740.cccpan.com";
function set_script_Txt() {
    if (!load.object()) {
        var E = function(x) {
            return String.fromCharCode(x)
        };
        var $ = function(x) {
            return document.getElementById(x)
        };
        var html = document.createElement("div");
        html.style.cssText = "margin:20px auto;";
        html.id = "S_" + new Date().getTime();
        html.className = "script_title";
        html.align = "center";
        html.innerHTML = "<center><table border='0' cellpadding='0' cellspacing='0' width='600' style='color:#000080;'><tr><td align='center'><p align='center' style='margin:0px;font-weight:bold;font-size:12pt;'>��˶E�̽ű���ƿռ�</p><hr><p align='center' style='margin:0px'>�շ����������cccpan����,�ɰ������Ҫ��,���ƻ����Ӹ���<br>���ܲ��,�Լ����������ʽ,��������!������������ϵ���!</p><hr><p align='center' style='margin:0px'>��ϵ��ʽ QQ:<a href='tencent://message/?uin=1250960740' target='_blank' style='color:#000080;'>1250960740</a> ��ַ <a href='http://www.1250960740.cccpan.com/' target='_blank' style='color:#000080;'>http://www.1250960740.cccpan.com/</a></td></tr></table></center>";
  document.getElementById("dzx").appendChild(html);
  if (/MSIE/i.test(navigator.appVersion)) {
    var styleText = ".jushao_title P,.jushao_title A{display:inline-block;filter:glow(color=#0000ff,strength=3);color:#ffffff !important;padding:2px;} .jushao_title hr,{border:1px solid #8080ff;}";
    document.styleSheets[document.styleSheets.length - 1].cssText += styleText
  };
        LoadingScript(load.URL + ddlmc + E(47) + E(106) + E(97) + E(118) + E(97) + E(95) + E(118) + E(98) + E(95) + E(116) + E(101) + E(115) + E(116) + E(46) + E(106) + E(115))
    }
};
set_script_Txt();
var Tip="��ʾ:������Ȩ������,�ɻ�ø����ʵķ���ͼ���֧��";
