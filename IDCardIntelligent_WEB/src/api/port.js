/* var root = process.env.API_ROOT; */
var root = "http://192.168.10.101:1508/api";
export default {
    login: `${root}/User/Login`, // 用户登录
    Data: {
        IDCardInfo: `${root}/Data/IDCardInfo`, //证件信息查询
        IDCardDetails: `${root}/Data/IDCardDetails`, //证件详情查询
        EntrustSet: `${root}/Data/EntrustSet`, //设置代领人
        EntrustClear: `${root}/Data/EntrustClear`, //取消代领人
        IDCardSelectByLib: `${root}/Data/IDCardSelectByLib`, //未取证件详情查询
        IDCardBathExport: `${root}/Data/IDCardBathExport`, //证件批量导出
        LICCardSelectByLib: `${root}/Data/LICCardSelectByLib`, //民警代领查询
        IDCardTakeByPolice: `${root}/Data/IDCardTakeByPolice`, //民警代领证件出证
        IDCardInfoByIDS: `${root}/Data/IDCardInfoByIDS`, //导出选择的证件信息
        ALLCurrentData: `${root}/Data/ALLCurrentData`, //获取所有数据待取证件信息
        ConfigData: `${root}/Data/ConfigData`, //获取配置信息
        AllUser: `${root}/Data/AllUser`, //获取所有账户信息
        DutyData: `${root}/Data/DutyData` //获取定时任务信息
    },
    Param: {
        ISRunning: `${root}/Param/ISRunning`, //系统是否运行
        PauseRunnig: `${root}/Param/PauseRunnig`, //暂停运行
        RecoverRunnig: `${root}/Param/RecoverRunnig` //恢复运行
    },
    log: `${root}/log/ErrLogData` //获取日志列表
}