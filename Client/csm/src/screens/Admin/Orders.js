function Orders() {
    
    return (<>
        <div style={{ margin: '50px' }}>
        <h2>Orders Table</h2>
        <table className="table table-responsive table-bordered">
            {renderHeader()}
            <tbody>
            {renderUsers()}
            </tbody>
        </table>
        </div>
    </>  );
}

export default Orders;