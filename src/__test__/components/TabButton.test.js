import { fireEvent, render } from "@testing-library/react";
import TabButton from "../../components/tab/tab-button/TabButton";

describe("TabButton", () => {
  const TestTabData = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
    },
  ];
  it("should render", () => {
    const onTabClick = jest.fn();
    const { container } = render(
      <TabButton
        tabs={TestTabData}
        activeTabIndex={0}
        onTabClick={onTabClick}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with active tab", () => {
   const mockParent = {
    activeTabIndex:0,
    onTabClick: jest.fn((index)=>{mockParent.activeTabIndex = index})
   }
    const { container } = render(
      <TabButton
        tabs={TestTabData}
        {...mockParent}
      />
    );
    
    fireEvent.click(container.querySelectorAll(".tab-title-container")[1]);
    
    expect(mockParent.activeTabIndex).toBe(1);
  });
});
