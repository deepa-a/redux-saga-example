import React from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fundsActions from 'actions/fundsActions';

class Recharge extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getRechargeProfiles('3GPPCAP');
    this.props.actions.getRechargeTypes();
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={RechargeForm}
      />
    );
  }
}

const initialValues = {
  topupType: '',
  voucherPIN: '',
  topupProfileId: '',
  receiptId: '',
  batchId: '',
  editAmount: false,
  amount: 0.00,
};

function onSubmit(values, { setSubmitting, setErrors }) {
  setTimeout(() => {
    console.log('User has been successfully saved!', values);
    setSubmitting(false);
  }, 2000);
}


function RechargeForm(props) {
  const {
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = props;
  return (
    <div className="form">
      <label className="form-field" htmlFor="topupType">
        <span>Recharge Type</span>
        <input
          name="topupType"
          type="text"
          onChange={handleChange}
        />
      </label>
      <div className="form-field-error">{errors.topupType}</div>
      <label className="form-field" htmlFor="voucherPIN">
        <span>Voucher PIN:</span>
        <input
          name="voucherPIN"
          type="text"
          onChange={handleChange}
        />
      </label>
      <div className="form-field-error">{errors.voucherPIN}</div>
      <label
        className="form-field"
        htmlFor="topupProfileId"
      >
        <span>Recharge Profile</span>
        <input
          name="topupProfileId"
          type="text"
          onChange={handleChange}
        />
      </label>
      <div className="form-field-error">
        {errors.topupProfileId}
      </div>
      <label
        className="form-field"
        htmlFor="receiptId"
      >
        <span>Receipt ID:</span>
        <input
          name="receiptId"
          type="text"
          onChange={handleChange}
        />
      </label>
      <div className="form-field-error">
        {errors.receiptId}
      </div>
      <label
        className="form-field"
        htmlFor="batchId"
      >
        <span>Batch ID:</span>
        <input
          name="batchId"
          type="text"
          onChange={handleChange}
        />
      </label>
      <div className="form-field-error">
        {errors.batchId}
      </div>
      <label className="form-field" htmlFor="editAmount">
        <span>Adjust Amount:</span>
        <input
          name="editAmount"
          type="checkbox"
          onChange={handleChange}
        />
      </label>
      <div className="form-field-error">{errors.editAmount}</div>
      <label
        className="form-field"
        htmlFor="amount"
      >
        <span>Amount:</span>
        <input
          name="amount"
          type="text"
          onChange={handleChange}
        />
      </label>
      <div className="form-field-error">
        {errors.amount}
      </div>
      <button onClick={handleSubmit}>
        {isSubmitting ? 'Loading' : 'Sign Up'}
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  topupTypes: state.funds.topupTypes,
  topupProfiles: state.funds.topupProfiles,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(fundsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recharge);
