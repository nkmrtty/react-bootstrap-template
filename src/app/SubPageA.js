import React, {Component} from 'react';

import  {Grid, Row, Col, PageHeader} from 'react-bootstrap';

class SubPageA extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <PageHeader>SubPageA <small>Sub page</small></PageHeader>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={3}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={9}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SubPageA;
