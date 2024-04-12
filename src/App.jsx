import React, { useState, useEffect, useRef } from "react";
import Iframe from "react-iframe";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { LuTerminal } from "react-icons/lu";
import { FiServer } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";

function FreshdeskTicketPopup({ onClose, onCreateTicket }) {
	const [selectedAgent, setSelectedAgent] = useState("Select the Agent");
	const [selectedApplication, setSelectedApplication] = useState(
		"Select the Application",
	);
	const [errorMessage, setErrorMessage] = useState("");

	const handleCreateTicket = () => {
		if (
			selectedAgent === "Select the Agent" ||
			selectedApplication === "Select the Application"
		) {
			// Set error message if default option is selected
			setErrorMessage("Please choose correct agent and application to proceed");
			return; // Prevent form submission
		}

		// Pass selectedAgent and selectedApplication to the parent component
		onCreateTicket(selectedAgent, selectedApplication);
		// Close the popup
		onClose();
	};

	return (
		<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25">
			<div className="bg-base-200 rounded-lg p-4 w-80 border">
				<div className="mb-4">
					<label
						htmlFor="agentSelect"
						className="block text-sm font-medium"
					>
						Agent:
					</label>
					<select
						id="agentSelect"
						name="agent"
						className="select w-full mt-2 select-sm"
						value={selectedAgent}
						onChange={(e) => setSelectedAgent(e.target.value)}
					>
						<option value="Select the Agent">Select the Agent</option>
						<option value="Abuzar Hasanov">Abuzar Hasanov</option>
						<option value="Akbar Hasanov">Akbar Hasanov</option>
						<option value="Alish Mammadov">Alish Mammadov</option>
						<option value="Emin Allahverdiyev">Emin Allahverdiyev</option>
						<option value="Jamil Farzana">Jamil Farzana</option>
						<option value="Mirzabi Babayev">Mirzabi Babayev</option>
						<option value="Orkhan Zulfugarov">Orkhan Zulfugarov</option>
					</select>
				</div>
				<div className="mb-4">
					<label
						htmlFor="applicationSelect"
						className="block text-sm font-medium"
					>
						Application:
					</label>
					<select
						id="applicationSelect"
						name="application"
						className="mt-1 select w-full select-sm"
						value={selectedApplication}
						onChange={(e) => setSelectedApplication(e.target.value)}
					>
						<option value="Select the Application">
							Select the Application
						</option>
						<option value="System General">System General</option>
						<option value="Boxhill">Boxhill</option>
						<option value="Eigen Ingenuity">Eigen Ingenuity</option>
						<option value="Confluence">Confluence</option>
						<option value="InfluxDB">InfluxDB</option>
						<option value="ElasticSearch">ElasticSearch</option>
						<option value="Neo4j">Neo4j</option>
						<option value="PostgreSQL">PostgreSQL</option>
						<option value="Barrier Status Panel">Barrier Status Panel</option>
						<option value="POB">POB</option>
						<option value="Event Scanner">Event Scanner</option>
						<option value="Widea iWAT">Widea iWAT</option>
					</select>
				</div>
				{/* Error message */}
				{errorMessage && (
					<p className="text-red-500 text-xs mb-2">{errorMessage}</p>
				)}
				<div className="flex justify-end">
					<button
						className="btn btn-outline btn-accent btn-sm"
						onClick={handleCreateTicket}
					>
						Create
					</button>
					<button
						className="btn btn-outline btn-default ml-2 btn-sm"
						onClick={onClose}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

function FreshdeskNotePopup({ onClose, onNoteTicket }) {
	const [selectedTicketId, setSelectedTicketId] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleNoteTicket = () => {
		if (selectedTicketId === "") {
			// Set error message if default option is selected
			setErrorMessage("Please enter valid ticket number to proceed");
			return; // Prevent form submission
		}

		// Pass selectedTicketId to the parent component
		onNoteTicket(selectedTicketId);
		// Close the popup
		onClose();
	};

	return (
		<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25">
			<div className="bg-base-200 rounded-lg p-4 w-80 border">
				<div className="mb-4">
					<label
						htmlFor="ticketIdSelect"
						className="block text-sm font-medium "
					>
						Ticket Number:
					</label>
					<input
						id="ticketIdSelect"
						type="number"
						name="ticketId"
						className="mt-2 input input-bordered input-sm w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						min="1"
						max="999999"
						value={selectedTicketId}
						onChange={(e) => setSelectedTicketId(e.target.value)}
					/>
				</div>
				{errorMessage && (
					<p className="text-red-500 text-xs mb-2">{errorMessage}</p>
				)}
				<div className="flex justify-end">
					<button
						className="btn btn-outline btn-accent btn-sm ml-2"
						onClick={handleNoteTicket}
					>
						Create
					</button>
					<button
						className="btn btn-outline btn-default btn-sm ml-2"
						onClick={onClose}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

function FreshdeskDumpPopup({ onClose, onDumpLogs }) {
	const [selectedTicketId, setSelectedTicketId] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleDumpLogs = () => {
		if (selectedTicketId === "") {
			// Set error message if default option is selected
			setErrorMessage("Please enter valid ticket number to proceed");
			return; // Prevent form submission
		}

		// Pass selectedTicketId to the parent component
		onDumpLogs(selectedTicketId);
		// Close the popup
		onClose();
	};

	return (
		<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25">
			<div className="bg-base-200 rounded-lg p-4 w-80 border">
				<div className="mb-4">
					<label
						htmlFor="ticketIdSelect"
						className="block text-sm font-medium"
					>
						Ticket Number:
					</label>
					<input
						id="ticketIdSelect"
						type="number"
						name="ticketId"
						className="mt-2 input input-bordered input-sm w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						min="1"
						max="999999"
						value={selectedTicketId}
						onChange={(e) => setSelectedTicketId(e.target.value)}
					/>
				</div>
				{errorMessage && (
					<p className="text-red-500 text-xs mb-2">{errorMessage}</p>
				)}
				<div className="flex justify-end">
					<button
						className="btn btn-outline btn-accent ml-2 btn-sm"
						onClick={handleDumpLogs}
					>
						Create
					</button>
					<button
						className="btn btn-outline btn-default btn-sm ml-2"
						onClick={onClose}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

function App() {
	const [apiData, setApiData] = useState(null);
	const [topPanelHeight, setTopPanelHeight] = useState("50%");
	const [maxHostWidth, setMaxHostWidth] = useState(0);
	const [maxServiceWidth, setMaxServiceWidth] = useState(0);
	const [contextMenuVisible, setContextMenuVisible] = useState(false);
	const [contextMenuPosition, setContextMenuPosition] = useState({
		x: 0,
		y: 0,
	});
	const [hoveredTableRowIndex, setHoveredTableRowIndex] = useState(null);
	const [contextApiHost, setContextApiHost] = useState("");
	const [contextApiService, setContextApiService] = useState("");
	const [showFreshdeskTicketPopup, setShowFreshdeskTicketPopup] =
		useState(false);
	const [showFreshdeskNotePopup, setShowFreshdeskNotePopup] = useState(false);
	const [showFreshdeskDumpPopup, setShowFreshdeskDumpPopup] = useState(false);

	// Reference to the context menu to check if click occurred inside or outside
	const contextMenuRef = useRef(null);

	useEffect(() => {
		// Event listener for mouse down to handle clicks outside context menu
		const handleClickOutside = (event) => {
			if (
				contextMenuRef.current &&
				!contextMenuRef.current.contains(event.target)
			) {
				setContextMenuVisible(false);
			}
		};

		// Event listener for ESC key to close context menu
		const handleEscKeyPress = (event) => {
			if (event.keyCode === 27) {
				setContextMenuVisible(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscKeyPress);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscKeyPress);
		};
	}, []);

	useEffect(() => {
		fetch("http://kube.veagy.one:14502/api/proxy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		})
			.then((response) => response.json())
			.then((data) => {
				const sortedData = data.sort((a, b) =>
					a.host_display_name.localeCompare(b.host_display_name),
				);
				setApiData(sortedData);

				let maxHostWidth = 0;
				let maxServiceWidth = 0;
				sortedData.forEach((item) => {
					maxHostWidth = Math.max(
						maxHostWidth,
						item.host_display_name.length * 8,
					);
					maxServiceWidth = Math.max(
						maxServiceWidth,
						item.description.length * 8,
					);
				});
				setMaxHostWidth(maxHostWidth);
				setMaxServiceWidth(maxServiceWidth);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const handleContextMenu = (e, index) => {
		e.preventDefault();
		setContextMenuPosition({ x: e.clientX, y: e.clientY });
		setContextMenuVisible(true);

		// Update $context_api_host with the value of host_display_name from the API response of the hovered row
		const hoveredRowData = apiData[index];
		if (hoveredRowData) {
			setContextApiHost(hoveredRowData.host_display_name);
			setContextApiService(hoveredRowData.description);
		}
	};

	const closeContextMenu = () => {
		setContextMenuVisible(false);
	};

	const handleHoverTableRow = (index) => {
		setHoveredTableRowIndex(index);
	};

	const handleLeaveTableRow = () => {
		setHoveredTableRowIndex(null);
	};

	const getStateText = (state) => {
		switch (state) {
			case 0:
				return {
					text: "OK",
					color: "#16A34A",
					badge: "badge border-[#16A34A] text-[#16A34A] badge-outline",
				};
			case 1:
				return {
					text: "WARNING",
					color: "#EAB308",
					badge: "badge border-[#EAB308] text-[#EAB308] badge-outline",
				};
			case 2:
				return {
					text: "CRITICAL",
					color: "#B91C1C",
					badge: "badge badge-error badge-outline",
				};
			case 3:
				return {
					text: "UNKNOWN",
					color: "#F97316",
					badge: "badge border-[#F97316] text-[#F97316] badge-outline",
				};
			default:
				return {
					text: "UNKNOWN",
					color: "#F97316",
					badge: "badge border-[#F97316] text-[#F97316] badge-outline",
				};
		}
	};

	const formatLastStateChange = (lastStateChange) => {
		const currentTimeGMT = new Date().getTime();
		const lastStateChangeDate = new Date(parseInt(lastStateChange) * 1000);
		const timeDifference = currentTimeGMT - lastStateChangeDate.getTime();
		const hours = Math.floor(timeDifference / (1000 * 60 * 60));
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60),
		);

		if (hours >= 24) {
			const days = Math.floor(hours / 24);
			return `${days}d ${hours % 24}h`;
		} else {
			return `${hours}h ${minutes}m`;
		}
	};

	// Start of 1st context button
	// Action to see details of the alert
	const alertDetails = () => {
		// Generate the dynamic URL
		const alertUrl = `http://naemon.int.eigen.co/thruk/cgi-bin/extinfo.cgi?type=2&host=${contextApiHost}&service=${contextApiService}`;

		// Open the URL in a new browser window
		window.open(alertUrl, "_blank");
	}; // End of 1st context button

	// Start of 2nd context button
	// Action to create a Freshdesk ticket
	const createTicket = () => {
		// Open the Freshdesk ticket popup
		setShowFreshdeskTicketPopup(true);
	};

	const handleCreateTicket = (agent, application) => {
		const requestBody = {
			agent: agent,
			application: application,
			contextApiHost: contextApiHost,
			contextApiService: contextApiService,
		};

		fetch("http://kube.veagy.one:14502/execute-script/createTicket", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => response.text()) // Parse response as text
			.then((data) => {
				console.log("POST request successful");
				console.log("Response:", data); // Log the text response
				// Close the popup window after successful submission
				setShowFreshdeskTicketPopup(false);
			})
			.catch((error) => {
				console.error("Error making POST request:", error);
			});
	};

	// Close the Freshdesk ticket popup
	const closeFreshdeskTicketPopup = () => {
		setShowFreshdeskTicketPopup(false);
	}; // End of 2nd context button

	// Start of 3rd context button
	// Action to add note to a Freshdesk ticket
	const noteTicket = () => {
		// Open the note options popup
		setShowFreshdeskNotePopup(true);
	};

	const handleNoteTicket = (ticketId) => {
		const requestBody = {
			ticketId: ticketId,
			contextApiHost: contextApiHost,
			contextApiService: contextApiService,
		};

		fetch("http://kube.veagy.one:14502/execute-script/noteTicket", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => response.text()) // Parse response as text
			.then((data) => {
				console.log("POST request successful");
				console.log("Response:", data); // Log the text response
				// Close the popup window after successful submission
				setShowFreshdeskNotePopup(false);
			})
			.catch((error) => {
				console.error("Error making POST request:", error);
			});
	};

	// Close the note options popup
	const closeFreshdeskNotePopup = () => {
		setShowFreshdeskNotePopup(false);
	}; // End of 3rd context button

	// Start of 4th context button
	// Action to add note to a Freshdesk ticket
	const dumpLogs = () => {
		// Open the note options popup
		setShowFreshdeskDumpPopup(true);
	};

	const handleDumpLogs = (ticketId) => {
		const requestBody = {
			ticketId: ticketId,
			contextApiHost: contextApiHost,
			contextApiService: contextApiService,
		};

		fetch("http://kube.veagy.one:14502/execute-script/dumpLogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		})
			.then((response) => response.text()) // Parse response as text
			.then((data) => {
				console.log("POST request successful");
				console.log("Response:", data); // Log the text response
				// Close the popup window after successful submission
				setShowFreshdeskNotePopup(false);
			})
			.catch((error) => {
				console.error("Error making POST request:", error);
			});
	};

	// Close the note options popup
	const closeFreshdeskDumpPopup = () => {
		setShowFreshdeskDumpPopup(false);
	}; // End of 4th context button

	// Start of 5th context button
	const viewLogs = () => {
		console.log("View logs button clicked!"); // Dummy console.log for testing
	};

	return (
		<div
			className="h-screen relative antialiased gap-2 flex flex-col p-5"
			data-theme="white"
		>
			<div className="flex justify-between gap-2 items-center p-4">
				<div className="font-extrabold text-2xl">
					Kubemon - WEB Interface for kubeigen
				</div>
				<div className="gap-2 flex">
					<a href="/">
						<button className="btn">
							<FiServer />
							Hosts
						</button>
					</a>
					<a href="/">
						<button className="btn">
							<MdMiscellaneousServices />
							Services
						</button>
					</a>
					{/* onclick */}
					<a href="/">
						<button className="btn">
							<LuTerminal />
							Terminal
						</button>
					</a>
				</div>
			</div>
			<div className=" flex " style={{ maxHeight: "100%" }}>
				{apiData ? (
					<table className="table table-fixed w-full">
						<thead className="text-base">
							<tr>
								<th
									style={{
										width: `${maxHostWidth}px`,
										whiteSpace: "nowrap",
									}}
								>
									Host
								</th>
								<th
									style={{
										width: `${maxServiceWidth}px`,
										whiteSpace: "nowrap",
									}}
								>
									Service
								</th>
								<th
									style={{
										width: "100px",
										textAlign: "center",
									}}
								>
									Status
								</th>
								<th
									style={{
										width: "100px",
										textAlign: "center",
									}}
								>
									Since
								</th>
								<th className="whitespace-nowrap overflow-hidden text-ellipsis">
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							{apiData.map((item, index) => (
								<tr
									key={index}
									id={`row-${index}`}
									className="hover"
									/* style={{
										
										transition: "background-color 0.2s ease-out",
										cursor: "default",
									}} */
									onMouseEnter={() => handleHoverTableRow(index)}
									onMouseLeave={handleLeaveTableRow}
									onContextMenu={(e) => handleContextMenu(e, index)}
								>
									<td className="whitespace-nowrap">
										{item.host_display_name}
									</td>
									<td className="whitespace-nowrap">{item.description}</td>
									<td
										className="text-center justify-center flex"
										style={
											{
												// backgroundColor: getStateText(item.state).color,
											}
										}
									>
										<div className={`${getStateText(item.state).badge} `}>
											{getStateText(item.state).text}
										</div>
									</td>
									<td className="text-center">
										{formatLastStateChange(item.last_state_change)}
									</td>
									<td
										style={{
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										{item.plugin_output}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "48px",
							color: "white",
						}}
					>
						Loading API data, please wait...
					</div>
				)}
			</div>

			{showFreshdeskTicketPopup && (
				<FreshdeskTicketPopup
					onClose={closeFreshdeskTicketPopup}
					onCreateTicket={handleCreateTicket}
				/>
			)}
			{showFreshdeskNotePopup && (
				<FreshdeskNotePopup
					onClose={closeFreshdeskNotePopup}
					onNoteTicket={handleNoteTicket}
				/>
			)}
			{showFreshdeskDumpPopup && (
				<FreshdeskDumpPopup
					onClose={closeFreshdeskDumpPopup}
					onDumpLogs={handleDumpLogs}
				/>
			)}

			{contextMenuVisible && (
				<div
					ref={contextMenuRef}
					className="absolute z-10 bg-gray-900 border rounded shadow"
					style={{
						top: contextMenuPosition.y,
						left: contextMenuPosition.x,
						minWidth: "200px",
						// background: "#303030",
						fontSize: "12px",
						// padding: "4px",
					}}
				>
					<ul className="menu bg-base-200 rounded-box">
						<li>
							<button
								onClick={() => {
									closeContextMenu();
									alertDetails();
								}}
								className="context-menu-button"
							>
								See details of the alert
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									closeContextMenu();
									createTicket();
								}}
								className="context-menu-button"
							>
								Create a Freshdesk ticket
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									closeContextMenu();
									noteTicket();
								}}
								className="context-menu-button"
							>
								Add as a note to ticket
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									closeContextMenu();
									dumpLogs();
								}}
								className="context-menu-button"
							>
								Dump logs to ticket
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									closeContextMenu();
									viewLogs();
								}}
								className="context-menu-button"
							>
								View pod logs
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									closeContextMenu();
									shellPod();
								}}
								className="context-menu-button"
							>
								Shell into the pod
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									closeContextMenu();
									restartPod();
								}}
								className="context-menu-button"
							>
								Restart the pod
							</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
