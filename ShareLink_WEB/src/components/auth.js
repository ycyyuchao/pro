import React,{Component} from 'react'

let wrapAuth = ComposedComponent =>class WrapComponent extends Component {
    // 构造
    constructor(props) {
      super(props);
      console.log(props)
    }

    static propTypes = {
      auth:PropTypes.string.isRequired,
    };

    render() {
      if (tool.getAuth(this.props.auth)) {
        return <ComposedComponent  { ...this.props} />;
      } else {
        return null;
       /*  return <ComposedComponent disabled={true}  { ...this.props} /> */
       /* return <ComposedComponent onClick={()=>alert("权限不足，请找管理员小K申请")} { ...this.props} /> */

      }
    }
};

export default wrapAuth;

