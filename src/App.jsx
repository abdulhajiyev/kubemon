import Iframe from "react-iframe";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
	return (
		<div className="h-screen bg-white p-2">
			<PanelGroup direction="vertical" className="rounded-lg gap-1">
				<Panel maxSize={75} className="bg-blue-400 rounded-lg">
					top
				</Panel>
				<PanelResizeHandle className="rounded-xl" />
				<Panel maxSize={75} className="rounded-lg">
					<div className="flex w-full h-full">
						<Iframe
							url="http://zortux.one:8080/ssh/host/zirt"
							allowFullScreen
							id=""
							className="w-full"
							display="block"
							position="relative"
						/>
					</div>
				</Panel>
			</PanelGroup>
		</div>
	);
}

export default App;
