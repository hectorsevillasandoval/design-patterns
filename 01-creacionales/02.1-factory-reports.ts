import { COLORS } from "../helpers/colors.ts"

interface Report {
  generate(): void;
}

class SalesReport implements Report {
  generate(): void {
    console.log('%cGenerating Sales Report', COLORS.blue);
  }
}
class InventoryReport implements Report {
  generate(): void {
    console.log('%cGenerating Inventory Report', COLORS.green);
  }
}

abstract class ReportFactory {
  abstract createReport(): Report;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
    console.log('%cReport is ready!', COLORS.lightGray);
  }
}

class SalesReportFactory extends ReportFactory {
  override createReport(): Report {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  override createReport(): Report {
    return new InventoryReport();
  }
}

const reportsFactories: Record<string, ReportFactory> = {
  sales: new SalesReportFactory(),
  inventory: new InventoryReportFactory(),
};
// Usage
const main = () => {

 const reportType = prompt('Enter report type (sales/inventory): ')?.toLowerCase() || '';
 const factory = reportsFactories[reportType];

  if (!factory) {
    console.log('%cInvalid report type selected!', COLORS.red);
    return;
  }

 factory.generateReport();
 console.log('%cThank you for using our report generator!', COLORS.purple);
 console.log('%cHave a great day!', COLORS.green);
 console.log('%cGoodbye!', COLORS.gray);
}

main();