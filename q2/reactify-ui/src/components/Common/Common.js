import React, { Component } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import * as ReactModal from 'react-modal';
import { faTimes, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import { isVaild } from '../Validator/Validator';

export class Button extends Component {
    render() {
        let cName = this.props.cName ? "d-common-btn " + this.props.cName : "d-common-btn";
        if (this.props.noDClass) cName = this.props.cName;
        return (
            <button id={this.props.id} className={cName} onClick={this.props.type === "submit" ? null : this.props.onClick} tabIndex={this.props.tabIndex}>{this.props.children ? this.props.children : this.props.title}</button>
        )
    }
}

export class Input extends Component {
    state = {
        errMsg: '',
        hasErr: false
    }
    hasRequiredError() {
        return this.props.showError && this.props.required && !(this.props.value && (typeof (this.props.value) === 'number' || this.props.value.trim()));
    }

    getClass() {
        let cName = this.props.cName ? "d-common-input " + this.props.cName : "d-common-input";
        cName = this.hasRequiredError() ? cName + " d-common-input-error" : cName;
        cName = this.props.readonly ? cName + " readonly" : cName;
        return cName;
    }

    onChange(e) {
        let re, errMsg, sync = false;
        switch (this.props.iType) {
            case 'email':
                re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                errMsg = 'Please enter valid email id';
                sync = true;
                break;
            default:
                break;
        }
        if (!re.test(e.target.value)) {
            this.setState({ errMsg: errMsg, hasErr: true })
        } else {
            this.setState({ errMsg: '', hasErr: false })
            this.props.onChange(e);
        }
        if (sync || !e.target.value) {
            this.props.onChange(e);
        }
    }

    render() {
        if (this.props.value && this.props.iType && this.state.hasErr && isVaild(this.props.iType, this.props.value)) {
            this.setState({ errMsg: '', hasErr: false })
        }
        return (
            <>
                {this.props.label && !this.props.noLabel && (
                    <Label title={this.props.label + (this.props.required ? "*" : "")} cName="d-common-input-label" />
                )}
                <input type={this.props.type} id={this.props.id} list={this.props.list} className={this.getClass()} placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => this.props.iType ? this.onChange(e) : this.props.onChange(e)} tabIndex={this.props.tabIndex} onFocus={(e) => this.props.onFocus ? this.props.onFocus(e, true) : null} onBlur={(e) => this.props.onFocus ? this.props.onFocus(e) : null} autoFocus={this.props.autoFocus} accept={this.props.accept} />
                {!this.state.hasErr && this.hasRequiredError() && !this.props.noLabel && (
                    <Label cName="d-common-label-error" title={this.props.label + " is required"} />
                )}
                {this.props.iType && this.state.hasErr && this.state.errMsg && !this.props.noLabel && (
                    <Label cName="d-common-label-error" title={this.state.errMsg} />
                )}
            </>
        )
    }
}

export class Textarea extends Component {
    hasRequiredError() {
        return this.props.showError && this.props.required && !(this.props.value && (typeof (this.props.value) === 'number' || this.props.value.trim()));
    }

    getClass() {
        let cName = this.props.cName ? "d-common-input " + this.props.cName : "d-common-input d-textarea";
        cName = this.hasRequiredError() ? cName + " d-common-input-error" : cName;
        cName = this.props.readonly ? cName + " readonly" : cName;
        return cName;
    }
    render() {
        return (
            <>
                {this.props.label && (
                    <Label title={this.props.label + (this.props.required ? "*" : "")} cName="d-common-input-label" />
                )}
                <textarea rows="5" cols="300" type={this.props.type} id={this.props.id} className={this.getClass()} placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => this.props.onChange(e)} tabIndex={this.props.tabIndex} />
                {this.hasRequiredError() && (
                    <Label cName="d-common-label-error" title={this.props.label + " is required"} />
                )}
            </>
        )
    }
}

export class Label extends Component {
    render() {
        return (
            <label className={this.props.cName ? "d-common-label " + this.props.cName : "d-common-label"} onClick={this.props.onClick ? this.props.onClick : null}>{this.props.children ? this.props.children : this.props.title}</label>
        )
    }
}

export class Link extends Component {
    render() {
        return (
            <ReactLink id={this.props.id} className={this.props.cName} to={this.props.to} target={this.props.target} onClick={this.props.onClick ? (e) => this.props.onClick(e) : null}>{this.props.children ? this.props.children : this.props.title}</ReactLink>
        )
    }
}

export class Span extends Component {
    render() {
        return (
            <span className={this.props.cName ? "d-common-span " + this.props.cName : "d-common-span"} onClick={this.props.onClick ? this.props.onClick : null}>{this.props.children ? this.props.children : this.props.title}</span>
        )
    }
}

export class UL extends Component {
    render() {
        const listItems = this.props.children.map((child, idx) => {
            return (
                <li className={this.props.cNameLi} key={idx} onClick={this.props.onClick} >{child}</li>
            );
        });
        return (
            <ul className={this.props.cName ? "d-common-ul " + this.props.cName : "d-common-ul"} >{listItems}</ul>
        )
    }
}

export class H1 extends Component {
    render() {
        return (
            <h1 className={this.props.cName ? "d-common-h1 " + this.props.cName : "d-common-h1"}>{this.props.children ? this.props.children : this.props.title}</h1>
        )
    }
}

export class H4 extends Component {
    render() {
        return (
            <h4 className={this.props.cName ? "d-common-h4 " + this.props.cName : "d-common-h4"}>{this.props.children ? this.props.children : this.props.title}</h4>
        )
    }
}

export class P extends Component {
    render() {
        return (
            <p className={this.props.cName ? "d-common-p " + this.props.cName : "d-common-p"}>{this.props.children ? this.props.children : this.props.title}</p>
        )
    }
}

export class Div extends Component {
    render() {
        return (
            <div id={this.props.id} style={this.props.style} className={this.props.cName} onClick={this.props.onClick ? (e) => this.props.onClick(e) : null}>{this.props.children}</div>
        )
    }
}

export class Img extends Component {
    render() {
        return (
            <img id={this.props.id} className={this.props.cName ? "d-common-img " + this.props.cName : "d-common-img"} src={this.props.isUrl ? this.props.src : require('../../assets/images/' + this.props.src)} alt={this.props.alt} height={this.props.height} width={this.props.width} onClick={this.props.onClick ? (e) => this.props.onClick(e) : null} />
        )
    }
}

export class Modal extends Component {
    render() {
        const customStyles = {
            content: {
                margin: 'auto',
                width: this.props.width,
                height: this.props.height,
                borderRadius: '20px',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)',
            }, overlay: {
                zIndex: 99,
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }
        }
        const src = this.props.isSuccess ? 'checked.svg' : 'cancel.svg';
        return (
            <ReactModal
                isOpen={true}
                contentLabel="D2b Confirmation"
                style={customStyles}
                onRequestClose={!this.props.close && (() => this.props.closeModal())}
                ariaHideApp={false}
            >
                <Div cName="d-common-modal">
                    <Div cName="d-common-modal-header">
                        <Label cName="d-common-modal-title" title={this.props.title} />
                        {!this.props.close &&
                            <Div onClick={() => this.props.closeModal()}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Div>
                        }
                    </Div>
                    <Div cName="d-common-modal-content text-center">
                        {(!this.props.close && this.props.title) || this.props.isConfirm ? (
                            <>
                                <Img src={src} width="70px" height="70px" />
                                <Label title={this.props.confirmMsg} />
                            </>
                        )
                            : (
                                this.props.children
                            )}
                    </Div>
                    {this.props.isConfirm && (
                        <Div cName="footer text-center">
                            <Button onClick={() => this.props.closeModal(true)}>
                                <FontAwesomeIcon icon={faCheck} />
                                <Span title="Yes" />
                            </Button>
                            <Button onClick={() => this.props.closeModal()}>
                                <FontAwesomeIcon icon={faBan} />
                                <Span title="No" />
                            </Button>
                        </Div>
                    )}
                    {this.props.isDeleteMes && (
                        <Div cName="footer text-center">
                            <Button onClick={() => this.props.delData()}>
                                Ok
                            </Button>
                            <Button onClick={() => this.props.closeModal()}>
                                Cancel
                            </Button>
                        </Div>
                    )}
                    {this.props.isMultipleLogin && (
                        <Div cName="footer text-center">
                            <Button onClick={() => this.props.multiplelogin()}>
                                Ok
                            </Button>
                        </Div>
                    )}
                </Div>
            </ReactModal>
        )
    }
}

export class Popup extends Component {
    render() {
        const customStyles = {
            content: {
                margin: 'auto',
                width: this.props.width,
                height: this.props.height,
                overflowX: 'auto',
                overflowY: 'auto',
                maxHeight: '700px',
                maxWidth: '900px',
                borderRadius: '20px',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)',
            }, overlay: {
                zIndex: 88
            }
        }
        return (
            <ReactModal
                isOpen={true}
                contentLabel="D2b Popup"
                onRequestClose={() => this.props.closeModal()}
                style={customStyles}
                ariaHideApp={false}
            >
                <Div cName="d-common-popup" id="d-common-popup">
                    <Div cName="header d-common-modal-header">
                        <Label cName="d-common-modal-title" title={this.props.title} />
                        <Div onClick={() => this.props.closeModal()}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Div>
                    </Div>
                    <Div cName="content d-common-modal-content">
                        {this.props.children}
                    </Div>
                    <Div cName="footer d-common-modal-footer text-center">
                        {this.props.isEdit ? (
                            <>
                                <Button cName={(this.props.nDel === this.props.popupId) ? "delete-btn readonly" : "delete-btn"} onClick={() => this.props.deleteRow()}>
                                    {/* <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px' }} /> */}
                                    {/* <Span title="Delete" /> */}
                                    Delete
                                </Button>
                                <Button onClick={() => this.props.submit()}>
                                    {/* <FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }} /> */}
                                    {/* <Span title="Create" /> */}
                                    Edit
                                </Button>
                            </>
                        ) : (
                                <Button onClick={() => this.props.submit()}>
                                    {/* <FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }} /> */}
                                    {/* <Span title="Create" /> */}
                                    {!this.props.isClientEdit ? "Create" : " Edit"}
                                </Button>
                            )}
                    </Div>
                </Div>
            </ReactModal>
        )
    }
}

export class Spinner extends Component {
    render() {
        return (
            <>
                <Div cName="lds-default">
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                    <Div />
                </Div>
                <Div cName="d-common-spinner" />
            </>
        );
    }
}

const TableHeader = props => {
    const cols = props.columns.map((col, index) => {
        return (
            <th key={index}>{props.displayColumns[col]}</th>
        );
    });

    return <thead className="fixedHeader">{cols}{props.isEdit && (<th>Edit</th>)}{props.isDelete && (<th>Delete</th>)}</thead>;
}


export const TableBody = props => {
    if (props.data.length === 0) {
        return (<tbody className="scrollContent">
            <tr>
                <td className="loading-data" colSpan={props.columns.length + 2}>{props.isLoading ? "Loading....." : " No Data Available "}</td>
            </tr>
        </tbody>);
    } else {
        const rows = props.data.map((row, rowIndex) => {
            return (
                <>
                    <tr key={rowIndex} className={props.rowHightlight ? 'table-highlight' : ''}>
                        {props.columns.map((column, index) => {
                            return (
                                <td key={index}>
                                    <Link to={"people/"+row['id']}>{row[column]}</Link>
                                </td>
                            );
                        })}
                        {<td><Button onClick={() => props.follow(row, rowIndex)}>Follow</Button></td>}
                    </tr>

                </>
            );
        });

        return <tbody className="scrollContent">{rows}</tbody>;
    }
};

export class Table extends Component {
    render() {
        return (
            <Div cName="d-common-table table-responsive">
                <table class="table">
                    {!this.props.noHeader && (<TableHeader {...this.props} />)}
                    <TableBody {...this.props} />
                </table>
            </Div>
        );
    }
}
